package com.template.restapi.aggregate.record.store.repository;

import com.template.restapi.aggregate.record.domain.entity.RecordDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface RecordRepository {
    //저장할 때 반환할 값이 없으니 void 써도 됨
    //프론트와 통신할 때 records란 파람을 받아옴
    void insertRecords(@Param("records") List<RecordDto> records);
}