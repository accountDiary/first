package com.template.restapi.aggregate.record.store.repository;

import com.template.restapi.aggregate.record.domain.entity.RecordDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface RecordRepository {

    //날짜에 따른 가계부 기록 보여줌
    List<RecordDto> selectRecord(@Param("record_date") String date);

    //저장할 때 반환할 값이 없으니 void 써도 됨
    //프론트와 통신할 때 records란 파람을 받아옴
    void insertRecords(@Param("records") List<RecordDto> records);

    int recordsCnt(@Param("record_date") String date);
}