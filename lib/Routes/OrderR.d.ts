/**
 * Заказ
 */
export declare namespace OrderR {
    namespace makeOrder {
        const route = "/order/make_order";
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
