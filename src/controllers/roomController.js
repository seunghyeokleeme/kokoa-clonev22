export const rooms = (req, res) => res.send("<h1>채팅 방 목록</h1>");
export const room = (req, res) =>
  res.send(`<h1>방 번호: ${req.params.id} 모임</h1>`);
export const sendChat = (req, res) =>
  res.send(`<h1>채팅 방:${req.params.id} - 채팅 보내기</h1>`);
export const search = (req, res) => res.send("<h1>채팅 방 검색</h1>");
export const add = (req, res) => res.send("<h1>채팅방 추가</h1>");
