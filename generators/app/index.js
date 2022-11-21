const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'your project name',
        default: this.appname
      }
    ])
      .then(answer => {
        this.answer = answer
      })
  }
  writing () {
    // 把每一个文件通过模版转换到目标路径
    const templates = [
      'public/favicon.ico',
      'public/index.html',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/App.vue',
      'src/main.js',
      'babel.config.js',
      'jsconfig.json',
      'package.json',
      'README.md',
      'vue.config.js',
      'yarn.lock'
    ]
    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answer
      )
    })
  }
}