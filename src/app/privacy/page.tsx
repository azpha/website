export default function Privacy() {
    return (
        <div className="my-6 text-left w-full lg:w-1/4 mx-auto">
            <h1 className="text-2xl font-bold">Privacy</h1>
            <h1>This site doesn't collect anything on you. No cookies (although tasty), no ominous advertisements, nothing.</h1>

            <h1 className="my-2 font-bold text-2xl">Plausible</h1>
            <h1>I use <a className="underline" href="https://plausible.io" target="_blank">Plausible analytics</a> to track traffic anonymously. Plausible;</h1>
            <ul className="list-disc list-inside">
                <li>does not collect personal identifying information</li>
                <li className="underline"><a href="https://plausible.io/privacy-focused-web-analytics" target="_blank">is dedicated to privacy</a></li>
                <li>compliant with the GDPR, CCPA and PECR data protection laws</li>
            </ul>
            <h1>I use a self-hosted instance in the US that doesn't use cookies.</h1>

            <h1 className="my-2 font-bold text-2xl">Cloudflare</h1>
            <h1>I use <a className="underline" href="https://pages.cloudflare.com" target="_blank">Cloudflare Pages</a> for this site. Most of my sites
            are proxied through Cloudflare as well. You can view their privacy policy <a className="underline" href="https://cloudflare.com/privacy" target="_blank">here</a>.</h1>

            <h1 className="my-2 font-bold text-2xl">Email</h1>
            <h1>When you submit a contact request on my page, it is sent to Discord via a webhook & my own API.</h1>
            <h1>This will be shown to me in an embed. I will never receive or process anything but what you provide.</h1>
            <h1>You can learn more about Discord's dedication to privacy <a className='underline' href="https://discord.com/privacy" target="_blank">here</a>.</h1>
        </div>
    )
}