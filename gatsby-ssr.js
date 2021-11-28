exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    let headComponents = getHeadComponents()

    // Temporary fix to remove the default translation
    headComponents = headComponents.filter(element => {
        return element?.props?.hrefLang != 'x-default'
    })

    replaceHeadComponents(headComponents)
}