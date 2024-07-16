package com.template.restapi.aggregate.record.store.repository;

import com.template.restapi.aggregate.record.domain.entity.RecordDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface RecordRepository {
    void insertRecords(@Param("records") List<RecordDto> records);
}