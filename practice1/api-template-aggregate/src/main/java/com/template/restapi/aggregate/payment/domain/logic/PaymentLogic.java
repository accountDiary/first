package com.template.restapi.aggregate.payment.domain.logic;

import com.template.restapi.aggregate.payment.domain.entity.PaymentDto;
import com.template.restapi.aggregate.payment.store.PaymentStore;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentLogic {
    private final PaymentStore paymentStore;

    public PaymentLogic(PaymentStore paymentStore) { this.paymentStore = paymentStore; }

    public List<PaymentDto> loadPaymentList() {
        return paymentStore.selectPayment();
    }
}
