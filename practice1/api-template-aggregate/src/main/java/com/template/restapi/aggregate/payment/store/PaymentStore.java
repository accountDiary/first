package com.template.restapi.aggregate.payment.store;

import com.template.restapi.aggregate.payment.domain.entity.PaymentDto;
import com.template.restapi.aggregate.payment.store.repository.PaymentRepository;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PaymentStore {

    public final SqlSessionTemplate sqlSessionTemplate;

    public PaymentStore(SqlSessionTemplate sqlSessionTemplate) { this.sqlSessionTemplate = sqlSessionTemplate; }

    public List<PaymentDto> selectPayment() {
        return sqlSessionTemplate
                .getMapper(PaymentRepository.class)
                .selectPayment();
    }
}
