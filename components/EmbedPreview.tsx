import {FunctionComponent} from 'react'
import {PreviewProps, PreviewLayoutKey} from 'sanity'
import ResponsiveIframe from './ResponsiveIframe'
import AspectRatio from './AspectRatio'

const EmbedPreview: FunctionComponent<PreviewProps<PreviewLayoutKey>> = (props) => {
  const {url, renderDefault} = props as PreviewProps<PreviewLayoutKey> & {url: string}

  if (!url) {
    return <div>Missing URL!</div>
  }

  const urlObject = new URL(url)
  let embedUrl

  if (urlObject.hostname.includes('youtube.com')) {
    const videoId = urlObject.searchParams.get('v')
    embedUrl = `https://www.youtube.com/embed/${videoId}`
  } else {
    embedUrl = url
  }

  return (
    <>
      {renderDefault({...props, title: 'Embedded Content'})}
      <AspectRatio>
        <ResponsiveIframe src={embedUrl} frameBorder="0" allowFullScreen title="Embedded content" />
      </AspectRatio>
    </>
  )
}

export default EmbedPreview
