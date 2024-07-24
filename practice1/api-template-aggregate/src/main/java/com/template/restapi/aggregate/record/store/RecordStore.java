package com.template.restapi.aggregate.record.store;

import com.template.restapi.aggregate.record.domain.entity.RecordDto;
import com.template.restapi.aggregate.record.store.repository.RecordRepository;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RecordStore {

    public final SqlSessionTemplate sqlSessionTemplate;

    public RecordStore (SqlSessionTemplate sqlSessionTemplate) { this.sqlSessionTemplate = sqlSessionTemplate; }

    public void insertRecords(List<RecordDto> records) {
        sqlSessionTemplate
                .getMapper(RecordRepository.class)
                .insertRecords(records);
    }

}
