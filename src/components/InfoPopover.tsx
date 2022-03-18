import { Popover, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

const info = [
  {
    title: "当サイトについて",
    content: `当サイトでは、遅くまで滞在可能なレイトチェックアウトプランを検索できます。
        順次機能拡張を行っていく予定です。
        開発ロードマップはGitHubをご確認ください。`,
  },
  {
    title: "お問い合わせ",
    content: "お問い合わせはこちらのGoogle Formからお願いします。",
  },
  {
    title: "開発者について",
    content: "GitHub: MoTaroh",
  },
];

export default function InfoPopover(props: any) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`${props.color} group rounded-full p-2 inline-flex items-center text-base font-medium hover:bg-slate-800 hover:bg-opacity-25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
                        `}
          >
            <InformationCircleIcon className="w-6 h-6"></InformationCircleIcon>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform sm:px-0 -right-4 sm:right-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-slate-900 ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                  {info.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col items-start p-2 -m-3 transition duration-150 ease-in-out rounded-lg"
                    >
                      <p className="text-sm font-bold text-slate-800">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
