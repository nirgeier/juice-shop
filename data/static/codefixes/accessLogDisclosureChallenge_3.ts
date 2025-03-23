/* /ftp directory browsing and file download */
  app.use('/ftp', serveIndexMiddleware, serveIndex('ftp', { icons: true }))
  app.use('/ftp(?!/quarantine)/:file', servePublicFiles())
  app.use('/ftp/quarantine/:file', serveQuarantineFiles())

  app.use('/.well-known', serveIndexMiddleware, serveIndex('.well-known', { icons: true, view: 'details' }))
  app.use('/.well-known', express.static('.well-known'))

  /* /encryptionkeys directory browsing */
  app.use('/encryptionkeys', serveIndexMiddleware, serveIndex('encryptionkeys', { icons: true, view: 'details' }))
  app.use('/encryptionkeys/:file', serveKeyFiles())

  /* /logs directory browsing */
  app.use('/support/logs', serveIndexMiddleware, serveIndex('logs', { icons: true, view: 'details' }))

  /* Swagger documentation for B2B v2 endpoints */
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  app.use(express.static(path.resolve('frontend/dist/frontend')))
  app.use(cookieParser('kekse'))