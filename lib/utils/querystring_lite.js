module.exports = {
  stringify: queryObj => {
    var qstring = ''
    for (const key in queryObj) {
      const value = queryObj[key]
      if (value) qstring += `&${key}=${value}`
    }

    qstring = qstring.slice(1)

    // encodeURI should be accessible in a browser environment
    // otherwise if neither node.js querystring nor encodeURI
    // are accessible, just return the string
    if (encodeURI) return encodeURI(qstring)
    return qstring
  }
}
