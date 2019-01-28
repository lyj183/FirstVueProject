export default {
  /**
   * 获取格式化日期时间
   * @author yangxinghua1
   * @param { string } time - 可转化为js date类型的时间，字符串等
   * @param { string } [type] - 格式化的类型，'short'与's'指代短类型(e.g. 2016-1-12 18:02:10)，'long'与'l'指代长类型(e.g. 2016-01-12 18:02:10)。默认是长类型
   * @param { string } [dateSep] - 用来分隔日期的字符。默认是'-'，用 - 分隔
   * @return { string } 格式化后的日期时间字符串或者空字符串
   * @example
   * console.log(dateUtil.getDateTime())    // ''
   * @example
   * let time = 1452592930000
   * console.log(dateUtil.getDateTime(time))    // '2016-01-12 18:02:10'
   * console.log(dateUtil.getDateTime(time, 'short', '.'))    // '2016.1.12 18:02:10'
   */
  getDateTime: function getDateTime(time, type, dateSep) {
    type = type || 'long'
    dateSep = dateSep || '-'

    if (time) {
      if (type === 'short' || type === 's') {
        // short type
        return this.fixDateTime(time, 'DT', 'short', dateSep)
      } else {
        // default as long type
        return this.fixDateTime(time, 'DT', 'long', dateSep)
      }
    } else {
      return ''
    }
  },

  /**
   * 获取格式化日期
   * @author yangxinghua1
   * @param { string } time - 可转化为js date类型的时间，字符串等
   * @param { string } [type] - 格式化的类型，'short'与's'指代短类型(e.g. 2016-1-12)，'long'与'l'指代长类型(e.g. 2016-01-12)。默认是长类型
   * @param { string } [dateSep] - 用来分隔日期的字符。默认是'-'，用 - 分隔
   * @return { string } 格式化后的日期字符串或者空字符串
   * @example
   * console.log(dateUtil.getDate())    // ''
   * @example
   * let time = 1452592930000
   * console.log(dateUtil.getDate(time))    // '2016-01-12'
   * console.log(dateUtil.getDate(time, 'short', '.'))    // '2016.1.12'
   */
  getDate: function getDate(time, type, dateSep) {
    type = type || 'long'
    dateSep = dateSep || '-'

    if (time) {
      if (type === 'short' || type === 's') {
        // short type
        return this.fixDateTime(time, 'D', 'short', dateSep)
      } else {
        // default as long type
        return this.fixDateTime(time, 'D', 'long', dateSep)
      }
    } else {
      return ''
    }
  },

  /**
   * 获取格式化时间
   * @author yangxinghua1
   * @param { string } time - 可转化为js date类型的时间，字符串等
   * @param { string } [type] - 格式化的类型，'short'与's'指代短类型(e.g. 18:02)，'long'与'l'指代长类型(e.g. 18:02:10)。默认是长类型
   * @return { string } 格式化后的时间字符串或者空字符串
   * @example
   * console.log(dateUtil.getTime())    // ''
   * @example
   * let time = 1452592930000
   * console.log(dateUtil.getTime(time))    // '18:02:10'
   * console.log(dateUtil.getTime(time, 'short'))    // '18:02'
   */
  getTime: function getTime(time, type) {
    type = type || 'long'

    if (time) {
      if (type === 'short' || type === 's') {
        // short type
        return this.fixDateTime(time, 'T', 'short')
      } else {
        // default as long type
        return this.fixDateTime(time, 'T', 'long')
      }
    } else {
      return ''
    }
  },

  /**
   * 格式化日期时间
   * @author yangxinghua1
   * @private
   * @param { string } time - 可转化为js date类型的时间，字符串等
   * @param { string } type - 格式化的类型，'DT'代表日期时间，'D'代表日期，'T'代表时间
   * @param { string } subType - 格式化的子类型，'long'代表长类型2016-01-12 18:02:10(DT) | 2016-01-12(D) | 18:02:10(T)，'short'代表短类型2016-1-12 18:02:10(DT) | 2016-1-12(D) | 18:02 (T)
   * @param { string } [dateSep] - 日期的分隔符，默认是'-'，用 - 分隔
   * @return { string } 格式化后的日期时间字符串或者空字符串
   */
  fixDateTime: function fixDateTime(time, type, subType, dateSep) {
    dateSep = dateSep || '-'
    if (time && (type === 'DT' || type === 'D' || type === 'T') && (subType === 'long' || subType === 'short')) {
      var dateTime = new Date(time);
      var year = dateTime.getFullYear().toString() // e.g. 2016
      var month = (dateTime.getMonth() + 1).toString() // e.g. 1 or 10
      var day = dateTime.getDate().toString() // e.g. 2 or 26
      var hour = dateTime.getHours().toString() // e.g. 8 or 12
      var minute = dateTime.getMinutes().toString() // e.g. 6 or 48
      var second = dateTime.getSeconds().toString() // e.g. 2 or 39
      // console.log(year, month, day, hour, minute, second)

      // prepare some strings
      var monthLong = month.length === 2 ? month : '0' + month // e.g. 01 or 10
      var dayLong = day.length === 2 ? day : '0' + day // e.g. 02 or 26
      var hourLong = hour.length === 2 ? hour : '0' + hour // e.g. 08 or 12
      var minuteLong = minute.length === 2 ? minute : '0' + minute // e.g. 06 or 48
      var secondLong = second.length === 2 ? second : '0' + second // e.g. 02 or 39
      // console.log(monthLong, dayLong, hourLong, minuteLong, secondLong)

      var dateStr = year + dateSep + month + dateSep + day // e.g. 2016-1-12
      var dateStrLong = year + dateSep + monthLong + dateSep + dayLong // e.g. 2016-01-12
      var timeStr = hourLong + ':' + minuteLong // e.g. 18:02
      var timeStrLong = hourLong + ':' + minuteLong + ':' + secondLong // e.g. 18:02:10
      // console.log(dateStr, dateStrLong, timeStr, timeStrLong)

      if (type === 'DT') {
        // date time
        return subType === 'short' ? dateStr + ' ' + timeStrLong : dateStrLong + ' ' + timeStrLong
      } else if (type === 'D') {
        // date
        return subType === 'short' ? dateStr : dateStrLong
      } else {
        // time
        return subType === 'short' ? timeStr : timeStrLong
      }
    } else {
      return ''
    }
  }
};