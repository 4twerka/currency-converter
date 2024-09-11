import {useState} from "react";

const CurrencyConverter = () => {
  const [Value, GetValue] = useState('');
  const [Exchange, SetExchange] = useState('');

  const InputValueResult = (e) => {
    GetValue(e.target.Value);

    const conversionRate = 40.0;

    SetExchange((event.target.value * conversionRate).toFixed(2));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-pink-500 p-4">
      <div className="bg-white rounded-2xl p-10 w-full max-w-xl shadow-2xl transform transition duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Currency Converter
        </h1>
        <div className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              From
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-lg font-semibold text-gray-700">
                USD
              </span>
              <input
                value={Value}
                onChange={InputValueResult} 
                type="number"
                className="w-full py-4 pl-16 pr-4 rounded-full border-2 border-purple-300 bg-white text-gray-800 focus:ring-4 focus:ring-pink-300 shadow-inner transition duration-300"
                placeholder="Enter amount"
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              To
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-lg font-semibold text-gray-700">
                UAH
              </span>
              <input
                value={Exchange}
                type="text"
                className="w-full py-4 pl-16 pr-4 rounded-full border-2 border-purple-300 bg-white text-gray-800 focus:ring-4 focus:ring-pink-300 shadow-inner transition duration-300"
                placeholder="Converted amount"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
