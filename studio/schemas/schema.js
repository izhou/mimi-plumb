// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import siteSettings from './documents/siteSettings'
import project from './documents/project'
import page from './documents/page'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import blockPortableText from './objects/blockPortableText'
import accordionText from './objects/accordionText'
import photo from './objects/photo'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'website',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    project,
    page,
    bodyPortableText,
    blockPortableText,
    accordionText,
    photo
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
  