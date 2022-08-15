export const join = (req, res) => res.send("<h1>코코아톡 회원 가입 ✅</h1>");
export const login = (req, res) => res.send("<h1>코코아톡 로그인 창✅</h1>");
export const users = (req, res) => res.send("<h1>사용자 목록✅</h1>");
export const user = (req, res) => res.send(`<h1>${req.params.id} 유저</h1>`);
export const editProfile = (req, res) => res.send(`<h1>나의 프로필 편집</h1>`);
export const removeUser = (req, res) => res.send(`<h1>회원 탈퇴</h1>`);
