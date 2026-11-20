# Certificate gallery guide

Each card in the gallery comes from `src/data/certificates.ts`. Cards without a photo display “Image coming soon.” A card becomes clickable once its image loads successfully.

## Add a photo to an existing card

1. Export the certificate as **WebP**, **JPEG**, or **PNG**. WebP or JPEG usually produces smaller files. Keep enough resolution to read the certificate when zoomed in. A long edge of around 1,600 to 2,400 pixels is a good starting point.
2. If needed, redact details you want to keep private before uploading. Use a short lowercase filename with hyphens, such as `owlypia-local-gold.webp`.
3. Copy the image into `public/certificates/`. The full project path should be `public/certificates/owlypia-local-gold.webp`.
4. Open `src/data/certificates.ts` and find the record with `id: 'owlypia-local-gold'`. Add the `image` line below.

```ts
{
  id: 'owlypia-local-gold',
  title: 'Owlypia Local Round',
  issuer: 'Owlypia',
  category: 'Academic competition',
  award: 'Gold Medal',
  description: 'Gold medal from the local round in Bishkek.',
  image: 'certificates/owlypia-local-gold.webp',
},
```

Use the path relative to `public/`, including the exact extension and capitalization. The site adds the GitHub Pages base path automatically. Export PDFs as images before adding them to the gallery.

## Add, edit, remove, or reorder a card

- **Add** — Copy a complete record into the `certificates` array. Give it a unique `id` containing lowercase letters, numbers, or hyphens. Fill in `title`, `issuer`, `category`, and `description`. Add `award`, `year`, and `image` when available. Add a separate Global Nominee record when you have the corresponding document.
- **Edit** — Update the text within the record. Enter a known year as a number, for example `year: 2026`. For the two Owlypia Bronze medals, edit each record individually.
- **Replace a photo** — Upload the new image with a new filename and update the `image` path. This also avoids serving a cached copy of the old photo.
- **Remove** — Delete a record from the array to remove the whole card. Delete only its `image` line to return to the placeholder.
- **Reorder** — Move a whole record up or down within the array. The page follows the array order, including the viewer’s Previous and Next controls.

## Add a verification link

If the issuer supplies a public HTTPS verification page for the specific certificate, add `verificationUrl: 'https://…',` to that record, replacing the example text with the full link. The gallery then shows a “Verify certificate” link. Leave the field out when you have no verification link. Check that the URL works in a signed-out browser window.

## Preview and publish

From the project folder, run `npm ci` the first time and then `npm run dev`. Open the local address that Vite prints, go to **Certificates**, and open the new scan. Test zoom, Previous and Next if multiple photos are available, and Escape to close.

After the repository and Pages source are set up as described in [README.md](README.md), commit and push both changes together.

```sh
git add public/certificates/ src/data/certificates.ts
git commit -m "Add certificate photo"
git push
```

On GitHub, open **Actions** and wait for **Deploy portfolio to GitHub Pages** to succeed. Reload the published gallery and confirm that the photo opens. When editing through GitHub’s website, upload the image via **Add file → Upload files**, then edit the matching record via the pencil button and commit the changes to `main`.
