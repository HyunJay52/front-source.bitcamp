--���������� ���ų���
-- ��ȭ ��¥ �ð� �󿵰� �����ο� �¼� �ݾ� ���Ż���

-- rcodetbl mbrid(id) rcode(�����ڵ�)
--schedulecode moviecode(��ȭ�ڵ�) screencode(�󿵰��ڵ�) starttime(���۽ð� - ��¥�� �ð�) 
--  moviecode moviecode moviename(��ȭ�̸�) 
-- ticket_theatertbl rcode(�����ڵ�), screen(�󿵰�), mas_seatrow max_seatcol
--agetbl payment�����ݾ� rcode
--���Ż��´� �ð����� if��

select*from rcodetbl;
select*from movietbl;
select* from scheduletbl;
select*from ticket_theatertbl;
select*from agetbl;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            select*from memtbl;

-- id, �����ڵ�, �������ڵ�, �����(������)
select memtbl.mbrid, rcodetbl.rcode, rcodetbl.schedulecode, rcodetbl.rgtrdate, scheduletbl.moviecode from memtbl
join rcodetbl on memtbl.mbrid = rcodetbl.mbrid;
--join scheduletbl on rcodetbl.rcode = scheduletbl.rcodetbl;
select rcodetbl.mbrid, rcodetbl.rgtrdate, scheduletbl.screen, scheduletbl.starttime
from rcodetbl join scheduletbl on rcodetbl.schedulecode = scheduletbl.schedulecode;
select scheduletbl.screen, scheduletbl.starttime, movietbl.moviename 
from schedule

-- ���� ����
--���ſ�ȭ ��¥ �ð� �󿵰� ���� ����

-- movietbl moviename (on rcodetbl.rcode = scheduletbl.moviecode)(on scheduletbl.moivecode = movietbl.moviecode)(on memtbl.mbrid = rcodetbl.mbrid)
-- schedulecode starttime (��¥ �ð� )
-- ticket_theatertbl screen (on rcodetbl.rcode = ticket_theatettbl.rcode)
--pointtbl point 
--reviewtbl review