// @TODO: consts ファイルをビルド時に切り替えたい

export default {
  static_url: 'https://s3-ap-northeast-1.amazonaws.com/eorzeabox-dev/',
  api_url: 'http://ec2-13-230-136-157.ap-northeast-1.compute.amazonaws.com',
  // api_url: 'http://localhost:8000',

  IMAGE_QUALITY: 0.6,
  THUMBNAIL_BOX_SIZE: { WIDTH: 200, HEIGHT: 200 },
  IMAGE_MAX_SIZE: 1280,
  THUMBNAIL_MAX_SIZE: 250
}
