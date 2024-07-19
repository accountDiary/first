package com.template.restapi.feature.record_category.service;

import com.template.restapi.aggregate.record_category.domain.entity.RecordCategoryDto;
import com.template.restapi.aggregate.record_category.domain.logic.RecordCategoryLogic;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class RecordCategoryService {

    private final RecordCategoryLogic recordCategoryLogic;

    public List<RecordCategoryDto> loadSpendingList() {
        return recordCategoryLogic.loadSpendingList();
    }

    public List<RecordCategoryDto> loadIncomeList() {
        return recordCategoryLogic.loadIncomeList();
    }

    public List<RecordCategoryDto> loadSpendingIncome() {
        return recordCategoryLogic.loadSpendingIncome();
    }
}
