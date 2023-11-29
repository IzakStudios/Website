const CORE_ELEMENTS = [
    "dashboard"
]

const loadElement = (elementName) => {
    var scriptElement = document.createElement("script")
    var stylesheetElement = document.createElement("link")

    scriptElement.src = `components/${elementName}/element.js`
    stylesheetElement.href = `components/${elementName}/style.css`

    stylesheetElement.ref = "stylesheet"
    
    document.head.appendChild(scriptElement)
    document.head.appendChild(stylesheetElement)
}

CORE_ELEMENTS.forEach(elementName => {
    loadElement(elementName)
})