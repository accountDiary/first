package com.template.restapi.aggregate.record.store.repository;

import com.template.restapi.aggregate.record.domain.entity.RecordDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface RecordRepository {
    List<RecordDto> insertRecord();
}
