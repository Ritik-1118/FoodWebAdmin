const Orders = () => {

    const orders = [
        { customerName: 'John Doe', orderId: 'ORD123', date: '2024-02-11', total: 50.00 },
        { customerName: 'Jane Smith', orderId: 'ORD124', date: '2024-02-10', total: 75.00 },
        { customerName: 'Alice Johnson', orderId: 'ORD125', date: '2024-02-09', total: 100.00 },
        { customerName: 'Bob Brown', orderId: 'ORD126', date: '2024-02-08', total: 120.00 },
        { customerName: 'Eve Wilson', orderId: 'ORD127', date: '2024-02-07', total: 90.00 },
        { customerName: 'Michael Davis', orderId: 'ORD128', date: '2024-02-06', total: 80.00 },
        { customerName: 'Samantha Taylor', orderId: 'ORD129', date: '2024-02-05', total: 110.00 },
        { customerName: 'David Lee', orderId: 'ORD130', date: '2024-02-04', total: 70.00 },
        { customerName: 'Sophia Martinez', orderId: 'ORD131', date: '2024-02-03', total: 95.00 },
        { customerName: 'Matthew Garcia', orderId: 'ORD132', date: '2024-02-02', total: 85.00 },
    ];

    return <>
        <div className="container mx-4 mt-8">
            <div className=" text-center mb-4">
                <h2 className="text-5xl font-bold mb-4">Total Orders</h2>
                <hr className="border-2 border-gray-800/90 mx-48"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {orders.map((order, index) => (
                <div key={index} className="bg-white shadow-lg shadow-gray-400 hover:drop-shadow-2xl rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">{order.customerName}</h3>
                    <p className="text-gray-600 mb-2">Order ID: {order.orderId}</p>
                    <p className="text-gray-600 mb-2">Date: {order.date}</p>
                    <p className="text-gray-600">Total: ${order.total}</p>
                    <p className="text-gray-600">Status: panding</p>
                </div>
                ))}
            </div>
        </div>
    </>
};
export default Orders;