import { useState, lazy, Suspense } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import AdvanceDepositComponent from '../AdvancedDepositComponent/AdvancedDepositComponent';
import TopFastMovingItems from '../TopFastMovingItemsComponent/TopFastMovingItems';
import PaymentSummaryComponent from '../PaymentSummaryComponent/PaymentSummaryComponent';

const HappyHourComponent = lazy(() => import('../HappyHourComponent/HappyHourComponent'));

const stockColumns = [
  { title: '#', dataIndex: 'key', key: 'key' },
  { title: 'Category Name', dataIndex: 'categoryName', key: 'categoryName' },
  { title: 'Item Name', dataIndex: 'itemName', key: 'itemName' },
  { title: 'Re-order Level', dataIndex: 'reorderLevel', key: 'reorderLevel' },
  { title: 'Stock Available', dataIndex: 'stockAvailable', key: 'stockAvailable' },
];

const stockData = [
  { key: '1', categoryName: 'Bulbs', itemName: 'Velmax Bulbs', reorderLevel: 50, stockAvailable: 30 },
  { key: '2', categoryName: 'Cable Flex', itemName: '0.5 Flex Cable', reorderLevel: 100, stockAvailable: 80 },
  { key: '3', categoryName: 'Stationery', itemName: 'A4 Paper Reams', reorderLevel: 20, stockAvailable: 10 },
  // Add more items as needed from DB
];

const fastMovingColumns = [
  { title: 'SN', dataIndex: 'key', key: 'key' },
  { title: 'Item Name', dataIndex: 'itemName', key: 'itemName' },
  { title: 'Qty', dataIndex: 'quantity', key: 'quantity' },
];

const fastMovingData = [
  { key: '1', itemName: 'Velmax Bulbs', quantity: 200 },
];

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap space-x-4 border-b border-gray-200">
        {children.map((child, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium ${index === activeTab ? 'border-b-2 border-blue-500 text-blue-500 focus:outline-none' : 'text-gray-500 hover:text-gray-700 focus:outline-none'}`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <div className="mt-4">{children[activeTab]}</div>
    </div>
  );
};

const TabPane = ({ children }) => <div>{children}</div>;

const Card = ({ title, extra, children }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="px-4 py-3 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
        <div className="space-x-2">{extra}</div>
      </div>
    </div>
    <div className="p-4">{children}</div>
  </div>
);

const Alert = ({ message, description, type }) => (
  <div className={`p-4 mb-4 border-l-4 ${type === 'warning' ? 'bg-yellow-50 border-yellow-500 text-yellow-700' : ''}`}>
    <p className="font-bold">{message}</p>
    <p>{description}</p>
  </div>
);

const Table = ({ columns, dataSource }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="px-2 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((data) => (
          <tr key={data.key} className="hover:bg-gray-200 transition-colors duration-200">
            {columns.map((col) => (
              <td key={col.key} className="px-4 py-2 whitespace-nowrap text-sm">{data[col.dataIndex]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function Home() {
  return (
    <div className="ml-4 mt-5 p-5 bg-white">
      <Tabs>
        <TabPane title="Stock Alert Tab">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
              title="Stock Alert"
              extra={
                <>
                  <button className="p-1 border rounded-none hover:bg-gray-100 transition-colors duration-200 focus:outline-none">-</button>
                  <button className="p-1 border rounded-none hover:bg-gray-100 transition-colors duration-200 focus:outline-none">+</button>
                </>
              }
            >
              <Alert
                message="Stock Running Low!"
                description=""
                type="warning"
              />
              <Table columns={stockColumns} dataSource={stockData} />
              <a href="#" className="block text-center mt-4 text-blue-500 hover:underline text-xs">View All</a>
            </Card>

            <Card
              title={<span><ShoppingCartOutlined className="mr-1" /> Top Fast Moving Items</span>}
              extra={
                <>
                  <button className="p-1 border rounded hover:bg-gray-100 transition-colors duration-200 focus:outline-none">-</button>
                  <button className="p-1 border rounded hover:bg-gray-100 transition-colors duration-200 focus:outline-none">+</button>
                </>
              }
            >
              <TopFastMovingItems />
              <a href="#" className="block text-center mt-4 text-blue-500 hover:underline text-xs">View All</a>
            </Card>
          </div>
        </TabPane>

        <TabPane title="Advance Payment | Deposits">
          <AdvanceDepositComponent />
        </TabPane>

        <TabPane title="Payments Mode Detailed">
          <PaymentSummaryComponent />
        </TabPane>

        <TabPane title={<span>Happy Hour <span className="bg-orange-500 text-white rounded-md px-2 ml-1">new</span></span>}>
          <Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}>
            <HappyHourComponent />
          </Suspense>
        </TabPane>
      </Tabs>
    </div>
  );
}
