import blockContent from './blockContent'
import person from './person'
import organization from './organization'
import referral from './referral'
import tag from './tag'
import portfolioItem from './portfolioItem'
import blogPost from './blogPost'
import technology from './technology'
import client from './client'

export const schemaTypes = [
  // Document types
  person,
  organization,
  client,
  referral,
  tag,
  technology,
  portfolioItem,
  blogPost,

  // Other types
  blockContent,
]
