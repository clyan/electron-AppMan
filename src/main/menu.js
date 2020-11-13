const menu = app => {
  return [
    {
      label: "文件",
      submenu: [
        {
          label: "运行新任务",
          accelerator: "CmdOrCtrl+N",
          click: function() {
            console.log(router);
            router.replace("AddProgress");
          }
        },
        {
          label: "退出",
          role: "quit",
          accelerator: "CmdOrCtrl+X"
        }
      ]
    },
    {
      label: "调度方式",
      accelerator: "CmdOrCtrl+O",
      submenu: [
        {
          label: "优先级调度",
          accelerator: "Cmd+A"
        },
        {
          label: "先来先服务调度",
          accelerator: "Cmd+B"
        },
        {
          label: "时间片轮转调度",
          accelerator: "Cmd+C"
        },
        {
          label: "高响应比优先调度",
          accelerator: "Cmd+D"
        },
        {
          label: "多级反馈队列调度",
          accelerator: "Cmd+E"
        }
      ]
    },
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        [{ role: "delete" }, { type: "separator" }, { role: "selectAll" }]
      ]
    },

    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forcereload" },
        { role: "toggledevtools" },
        { type: "separator" },
        { role: "resetzoom" },
        { role: "zoomin" },
        { role: "zoomout" },
        { type: "separator" },
        { role: "togglefullscreen" }
      ]
    }
    // {
    //   label: "Window",
    //   submenu: [{ role: "minimize" }, { role: "zoom" }, { role: "close" }]
    // },
    // {
    //   role: "help",
    //   submenu: [
    //     {
    //       label: "Learn More",
    //       click: async () => {
    //         const { shell } = require("electron");
    //         await shell.openExternal("https://electronjs.org");
    //       }
    //     }
    //   ]
    // }
  ];
};

export default menu;
