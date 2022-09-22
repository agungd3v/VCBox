module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'VCBox',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
}