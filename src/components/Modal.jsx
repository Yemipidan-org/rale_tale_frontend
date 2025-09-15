const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#161616] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-4 flex justify-end">
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        <div className="px-4 pb-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
