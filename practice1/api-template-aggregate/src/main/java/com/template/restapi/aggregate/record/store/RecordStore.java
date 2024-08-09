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

    public List<RecordDto> selectRecord(String date) {
        return sqlSessionTemplate
                .getMapper(RecordRepository.class)
                .selectRecord(date);
    }
    public void insertRecords(List<RecordDto> records) {
        sqlSessionTemplate
                .getMapper(RecordRepository.class)
                .insertRecords(records);
    }

    public int recordCnt(String date) {
        return sqlSessionTemplate
                .getMapper(RecordRepository.class)
                .recordsCnt(date);
    }

    public void updateRecords(List<RecordDto> recordsLists) {
        sqlSessionTemplate
                .getMapper(RecordRepository.class)
                .updateRecords(recordsLists);
    }

}
