// ブラウザがlocalStorageに対応しているかチェック
if ("localStorage" in window && window.localStorage !== null) {
  // フォーム要素の取得
  const form = document.querySelector(".login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // ページ読み込み時に保存データがあれば自動入力
  window.addEventListener("load", () => {
    // データの取得
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    // 保存データがあれば入力欄に設定
    if (savedEmail) emailInput.value = savedEmail;
    if (savedPassword) passwordInput.value = savedPassword;
  });

  // フォーム送信時の処理
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // データの保存
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);

    alert("ログイン情報を保存しました🎉");
  });
} else {
  // 使えない。。。
  console.log("このブラウザはlocalStorageに対応していません");
}
