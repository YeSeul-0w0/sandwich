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

    memo_info.innerHTML = `
    <div class="card text-white bg-dark mb-3">
        <div class="card-header">Memo</div>
            <div class="card-body">
                <p class="card-text">${save_list}</p>
                <h4 class="card-title">Enter Memo</h4>
                <textarea name="memo" rows="3" cols="40"></textarea>
                <div class="buttons">
                    <button id="enroll" type="button" class="btn btn-success">등록</button>
                    <button id="del" type="button" class="btn btn-danger">취소</button>
                </div>
            </div>
    </div>
    `
}
