function exportSpriteSheet(dataFilePath, imageFilePath, spriteFrames) {
    var lua_table = 'return {\n'
    for (var key in spriteFrames) {
        var frame = spriteFrames[key].frame
        var sourceSize = spriteFrames[key].sourceSize
        lua_table += '\t["' + key + '"] = love.graphics.newQuad(' + frame.x + ', ' + frame.y + ', ' + frame.width + ', ' + frame.height + ', ' + sourceSize.width + ', ' + sourceSize.height + '),\n'
    }
    lua_table += "}"

    return {
        data: lua_table,
        format: "lua"
    };
}