import Head from 'next/head';

export default function HeadTags() {
    return (
        <Head>
            <title>Alex Frantz</title>
            <meta property="og:title" content="alexavfrantz.com" />
            <meta property="og:description" content="Welcome to my personal website! See my favorite music, read my reviews on games and more!" />
            <link rel="me" href="https://mast.thatalex.dev/@alex" />
        </Head>
    )
}