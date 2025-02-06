import express, { Request, Response } from 'express'
import { createServer as createViteServer } from 'vite'
import compression from 'compression'
import fs from 'fs'
import path from 'path'

async function createServer() {
    const app = express()
    app.use(compression())

    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom'
    })
    app.use(vite.middlewares)

    app.use('*', async (req: Request, res: Response) => {
        const url = req.originalUrl

        try {
            const template = fs.readFileSync(
                path.resolve(process.cwd(), 'index.html'),
                'utf-8'
            )

            const transformedTemplate = await vite.transformIndexHtml(url, template)
            const { render } = await vite.ssrLoadModule('./src/entry-server.tsx')
            const appHtml = await render(url)

            const html = transformedTemplate.replace(`<!--app-html-->`, appHtml)
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
        } catch (e) {
            vite.ssrFixStacktrace(e as Error)
            console.error(e)
            res.status(500).end((e as Error).stack)
        }
    })

    app.listen(3000, () => {
        console.log('server started')
    })
}

createServer()