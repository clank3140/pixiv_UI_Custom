$(function () {
    var user_id;
    user_id = $(".user-name-container a").attr("href");
    console.log(user_id);
    user_id = user_id.replace("/users/", "");
    $("#wrapper").prepend("<a class=\"addedMenu\" href =\"https://www.pixiv.net/setting_user.php\">設定</a>");
    $("#wrapper").prepend("<a class=\"addedMenu\" href =\"https://www.pixiv.net/novel/marker_all.php\">しおり</a>");
    $("#wrapper").prepend("<a class=\"addedMenu\" href =\"https://www.pixiv.net/history.php\">閲覧履歴</a>");
    $("#wrapper").prepend("<a class=\"addedMenu\" href =\"https://www.pixiv.net/bookmark.php\">ブックマーク</a>");
    console.log(user_id);
    $("#wrapper").prepend("<a class=\"addedMenu\" href =\"https://www.pixiv.net/users/" + user_id + "/followers/\">フォロワー</a>");
    $("#wrapper").prepend("<a class=\"addedMenu\" href =\"https://www.pixiv.net/users/" + user_id + "/following/\">フォロー</a>");
    $("#wrapper").prepend("<a class=\"addedMenu\" href =\"https://www.pixiv.net/manage/illusts/\">作品管理</a>");
});