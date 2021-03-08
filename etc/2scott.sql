--마이페이지 예매내역
-- 영화 날짜 시간 상영관 예매인원 좌석 금액 예매상태

-- rcodetbl mbrid(id) rcode(예매코드)
--schedulecode moviecode(영화코드) screencode(상영관코드) starttime(시작시간 - 날짜와 시간) 
--  moviecode moviecode moviename(영화이름) 
-- ticket_theatertbl rcode(예매코드), screen(상영관), mas_seatrow max_seatcol
--agetbl payment결제금액 rcode
--예매상태는 시간으로 if문

select*from rcodetbl;
select*from movietbl;
select* from scheduletbl;
select*from ticket_theatertbl;
select*from agetbl;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            select*from memtbl;

-- id, 예매코드, 스케쥴코드, 등록일(예매일)
select memtbl.mbrid, rcodetbl.rcode, rcodetbl.schedulecode, rcodetbl.rgtrdate, scheduletbl.moviecode from memtbl
join rcodetbl on memtbl.mbrid = rcodetbl.mbrid;
--join scheduletbl on rcodetbl.rcode = scheduletbl.rcodetbl;
select rcodetbl.mbrid, rcodetbl.rgtrdate, scheduletbl.screen, scheduletbl.starttime
from rcodetbl join scheduletbl on rcodetbl.schedulecode = scheduletbl.schedulecode;
select scheduletbl.screen, scheduletbl.starttime, movietbl.moviename 
from schedule

-- 평점 리뷰
--예매영화 날짜 시간 상영관 평점 리뷰

-- movietbl moviename (on rcodetbl.rcode = scheduletbl.moviecode)(on scheduletbl.moivecode = movietbl.moviecode)(on memtbl.mbrid = rcodetbl.mbrid)
-- schedulecode starttime (날짜 시간 )
-- ticket_theatertbl screen (on rcodetbl.rcode = ticket_theatettbl.rcode)
--pointtbl point 
--reviewtbl review