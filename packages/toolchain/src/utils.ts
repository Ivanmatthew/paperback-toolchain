import * as fs from 'node:fs'
import * as path from 'node:path'
import chalk from 'chalk'

export default {
  headingFormat: chalk`{bold {red #} $1}`,

  fixedWidth(number: number, width: number) {
    return (Array.from({length: width}).join('0') + number).slice(-width)
  },

  prefixTime(message = '') {
    const date = new Date()

    const time = `${this.fixedWidth(date.getHours(), 2)}:${this.fixedWidth(date.getMinutes(), 2)}:${this.fixedWidth(date.getSeconds(), 2)}:${this.fixedWidth(date.getMilliseconds(), 4)}`
    return chalk`[{gray ${time}}] ${message}`
  },

  log(message = '') {
    const cursorTo = (process.stdout as any).cursorTo
    if (cursorTo) {
      cursorTo(0)
    }

    process.stdout.write(this.prefixTime(message) + '\n')
  },

  error(message = '') {
    this.log(chalk`{red ${message}}`)
  },

  time(label: string, template = '$1') {
    const startTime = process.hrtime.bigint()

    return {
      end: () => {
        const hrend = process.hrtime.bigint() - startTime
        // eslint-disable-next-line new-cap
        this.log(`${template.replace('$1', label)}: ${chalk.green((hrend / BigInt(1_000_000)) + 'ms')}`)
      },
    }
  },

  deleteFolderRecursive(folderPath: string) {
    folderPath = folderPath.trim()
    if (folderPath.length === 0 || folderPath === '/') return

    if (fs.existsSync(folderPath)) {
      for (const file of fs.readdirSync(folderPath)) {
        const curPath = path.join(folderPath, file)
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          this.deleteFolderRecursive(curPath)
        } else { // delete file
          fs.unlinkSync(curPath)
        }
      }

      fs.rmdirSync(folderPath)
    }
  },

  copyFolderRecursive(source: string, target: string) {
    source = source.trim()
    if (source.length === 0 || source === '/') return

    target = target.trim()
    if (target.length === 0 || target === '/') return

    if (!fs.existsSync(source)) return

    let files = []
    // check if folder needs to be created or integrated
    const targetFolder = path.join(target, path.basename(source))
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder)
    }

    // copy
    if (fs.lstatSync(source).isDirectory()) {
      files = fs.readdirSync(source)
      for (const file of files) {
        const curSource = path.join(source, file)
        if (fs.lstatSync(curSource).isDirectory()) {
          this.copyFolderRecursive(curSource, targetFolder)
        } else {
          fs.copyFileSync(curSource, path.join(targetFolder, file))
        }
      }
    }
  },

  analyzeFolderRecursive(listOfPromises: Promise<any>[], folderPath: string, fileAnalysisFn: (filePath: string) => Promise<any> | void, folderAnalysisFn?: (folderPath: string) => Promise<any> | void) {
    folderPath = folderPath.trim()
    if (folderPath.length === 0 || folderPath === '/') return

    if (fs.existsSync(folderPath)) {
      for (const file of fs.readdirSync(folderPath)) {
        const curPath = path.join(folderPath, file)
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          if (folderAnalysisFn) {
            const result = folderAnalysisFn(curPath)
            // Dude????
            // eslint-disable-next-line max-depth
            if (result) {
              listOfPromises.push(result)
            }
          }

          this.analyzeFolderRecursive(listOfPromises, curPath, fileAnalysisFn, folderAnalysisFn)
        } else { // analyze file
          const result = fileAnalysisFn(curPath)
          if (result) {
            listOfPromises.push(result)
          }
        }
      }
    }
  },
}
