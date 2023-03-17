The following notes demonstrate the files and fields that need to be updated in third party project repositories at the start of a new Notary Node season.
Though it is indicative of some of the things needed when adding new 3rd Party projects, additional changes may be required - contact partners@komodoplatform.com for more information.

`src/komodo_notaries.h`
- Add new season pubkeys. E.g. https://github.com/emc2foundation/einsteinium/commit/a716ae80995e51b9a9d0bd5977a3463bbda4a17e
- Add HF blockheight to `KMD_SEASON_HEIGHTS[NUM_KMD_SEASONS]`
- Increment `NUM_KMD_SEASONS`


`configure.ac`
- Increment `_CLIENT_VERSION_REVISION`
- Increment `_CLIENT_VERSION_BUILD`
- Increment `_COPYRIGHT_YEAR`


`src/clientversion.h`
- Increment `CLIENT_VERSION_REVISION`
- Increment `CLIENT_VERSION_BUILD`
- Increment `COPYRIGHT_YEAR`

