export function memo() {
    const memo_info = document.getElementById('memo')

    const save_list=[]
    const memo_list = localStorage.getItem('memo')
    if (memo_list) {
        let array = JSON.parse(memo_list)
        for (let i = 0; i < array.length; i++) {
            save_list.push(array[i])
        }
    }
    //<p class="card-text">${save_list}</p>
    // <button id="enroll" type="button" class="btn btn-success">등록</button>
    // <button id="del" type="button" class="btn btn-danger">취소</button>

    // memo_info.innerHTML = ``
}
