// 构建 build 时使用这个地址
// const url = 'http://223.75.204.112:808/resources/directory/project.json'

//本地测试地址
const url = '/static/project.json'
export function getData() {
    fetch(url)
        .then(
            response => response.json()
        )
        // .then(
        //     data => console.log(data)
        // )
}

