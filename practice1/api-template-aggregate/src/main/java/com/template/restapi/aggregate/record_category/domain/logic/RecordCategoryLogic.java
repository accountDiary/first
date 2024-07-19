package com.template.restapi.aggregate.record_category.domain.logic;

import com.template.restapi.aggregate.record_category.domain.entity.RecordCategoryDto;
import com.template.restapi.aggregate.record_category.store.RecordCategoryStore;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecordCategoryLogic {
    private final RecordCategoryStore recordCategoryStore;

    public RecordCategoryLogic(RecordCategoryStore recordCategoryStore) { this.recordCategoryStore = recordCategoryStore; }

    public List<RecordCategoryDto> loadSpendingList() {
        return recordCategoryStore.selectSpending();
    }

    public List<RecordCategoryDto> loadIncomeList() {
        return recordCategoryStore.selectIncome();
    }

    public List<RecordCategoryDto> loadSpendingIncome() {
        return recordCategoryStore.selectSpendingIncome();
    }

}
