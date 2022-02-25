export function memo() {
    const memo_info = document.getElementById('memo')
    console.log(memo_info)

    console.log("test")

    memo_info.innerHTML = `
    <div class="card text-white bg-dark mb-3">
        <div class="card-header">Memo</div>
            <div class="card-body">
                <h4 class="card-title">dd</h4>
                    <p class="card-text">test</p>
            </div>
    </div>
    `
}