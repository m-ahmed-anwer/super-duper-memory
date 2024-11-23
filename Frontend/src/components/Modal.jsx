import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

function Modal({ isModalOpen, handleCancelDelete, handleConfirmDelete }) {
  return (
    <Transition.Root show={isModalOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCancelDelete}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Modal Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-zinc-800 text-left shadow-xl transition-all sm:my-8 sm:w-full max-sm:w-4/6 sm:max-w-lg">
                {/* Modal Content */}
                <div className="bg-white dark:bg-zinc-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/* Warning Icon */}
                    <div className="bg-red-100 dark:bg-red-300 flex h-12 w-12 items-center justify-center rounded-full sm:h-10 sm:w-10">
                      <HiOutlineExclamationTriangle className="h-6 w-6 text-red-600 dark:text-red-800" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-gray-900 dark:text-white"
                      >
                        Delete Confirmation
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-700 dark:text-zinc-300">
                          Are you sure you want to delete this recipe?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal Actions */}
                <div className="bg-gray-50 dark:bg-zinc-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 hover:bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                    onClick={handleConfirmDelete}
                  >
                    Yes, Delete
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-zinc-800 text-sm font-semibold text-gray-900 dark:text-white px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:ring-zinc-600 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={handleCancelDelete}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
