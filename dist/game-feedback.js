/* Encouragement is deterministic per question, so refresh never changes its message. */
(function(global){
 const praise=['Chính xác, Nga Anh ơi!','Nga Anh làm tốt lắm!','Một câu đúng thật xinh!','Thỏ Mây vỗ tay cho bạn!','Bạn nhớ bài rất tốt!','Đúng rồi, mình tiến thêm một bước!','Tuyệt lắm, tiếp tục giữ nhịp nhé!','Bạn đã hiểu đúng rồi!'];
 const encouragement=['Chưa đúng lần này, nhưng mình vẫn tiến bộ.','Không sao, mình cùng xem lại nhé!','Câu này hơi khó, Thỏ Mây ở đây với bạn.','Sai một chút để nhớ lâu hơn nhé.','Mình chậm lại một nhịp, rồi sẽ làm được.','Đừng nản nhé, Nga Anh đang học thêm một điều mới.','Một câu sai không làm mất những gì bạn đã học.','Mình cùng gỡ nút thắt này nhé!'];
 const tips={vocab:'Nhìn lại chữ Hán, pinyin và nghĩa để ghi nhớ cả cụm nhé.',grammar:'Đối chiếu cấu trúc với nghĩa của câu, rồi đọc lại ví dụ một lần.',reading:'Tìm từ khóa và bằng chứng trong câu trước khi chọn đáp án nhé.',listening:'Xem lời đọc trong giải thích, rồi nghe lại để nhận ra những âm còn lạ.',writing:'So lại chữ Hán và trật tự từ với đáp án để biết cần sửa ở đâu.'};
 const successes={vocab:'Bạn vừa củng cố thêm một từ. Hãy đọc lại thành tiếng để nhớ lâu hơn nhé.',grammar:'Cấu trúc đã vào đúng chỗ rồi. Thử nghĩ thêm một câu của riêng bạn nhé.',reading:'Bạn đã hiểu được ý của câu. Cùng giữ thói quen tìm từ khóa này nhé.',listening:'Bạn đã chọn đúng ý của câu mẫu. Mình tiếp tục luyện nghe từng chút nhé.',writing:'Câu trả lời khớp đáp án rồi. Chăm chút từng chữ là một bước tiến tốt.'};
 function choose({correct,skill,streak=0,index=0,stage=1}){
  if(skill==='speaking')return {tone:'practice',status:'ĐÃ TỰ LUYỆN NÓI',symbol:'♡',title:'Cảm ơn Nga Anh đã mạnh dạn đọc to!',body:'Mỗi lần thực hành là một lần tự tin hơn. Đây là ghi nhận tự luyện, không phải điểm phát âm tự động.',streak:0};
  const offset=Math.abs(stage*3+index)%praise.length;
  if(correct){const title=streak>=5?`${streak} câu đúng liên tiếp — Nga Anh xuất sắc!`:streak===3?'Ba câu đúng liên tiếp, giỏi lắm Nga Anh!':praise[offset];return {tone:'correct',status:'CHÍNH XÁC',symbol:'✦',title,body:successes[skill]||'Cùng ghi nhớ điều vừa học rồi đi tiếp nhé.',streak};}
  return {tone:'encourage',status:'CHƯA ĐÚNG · CÙNG ÔN LẠI',symbol:'♡',title:encouragement[offset],body:tips[skill]||'Cùng xem đáp án và giải thích để hiểu rõ hơn nhé.',streak:0};
 }
 global.HaloGameFeedback={choose};
})(typeof window==='undefined'?globalThis:window);
