export declare namespace ReceiptR {
    namespace receiptAdd {
        const route = "/receipt/add";
        interface RequestI {
            city: string;
            delivery_address: string;
            comment: string;
            delivery_date: string;
            delivery_time_comment: string;
            aProduct: {
                product_id: number;
                count: number;
            }[];
        }
        interface ResponseI {
            order_id: number;
        }
    }
    namespace receiptSave {
        const route = "/receipt/save";
        interface RequestI {
            city: string;
            delivery_address: string;
            comment: string;
            delivery_date: string;
            delivery_time_comment: string;
            aProduct: {
                product_id: number;
                count: number;
            }[];
        }
        interface ResponseI {
            order_id: number;
        }
    }
}
