import multer, { DiskStorageOptions, StorageEngine } from "multer";

const options: DiskStorageOptions = {
  destination: function(_req, _file, done) {
    const pathStorage = `${__dirname}/../storage`
    done(null, pathStorage)
  },
  filename: (_req, file, done) => {
    const ext = file.originalname.split('.').pop()
    const filename = `file-${Date.now()}.${ext}`
    done(null, filename)
  }
}
const storage: StorageEngine = multer.diskStorage(options)

export default multer({ storage })
