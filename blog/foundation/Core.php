<?php
/**
 * Created by PhpStorm.
 * User: shiyue
 * Date: 2017/4/13
 * Time: 10:08
 */

Class Core {

    // 运行程序
    function run() {
        spl_autoload_register(array($this, 'loadClass'));

    }

    // 路由处理
    public function route() {
        $controllerName = '';
        $action = '';
        $param = array();

        $url = isset($_GET['url']) ? $_GET['url'] : false;
        if ($url) {
            // 使用 '/'分割字符串，并存入数组中
            $urlArray = explode('/', $url);
            // 删除空的数组元素
            $urlArray = array_filter($urlArray);
            // 获取控制器名字
            $controllerName = ucfirst($urlArray[0]);

            // 获取方法名
            array_shift($urlArray);
            $action = $urlArray ? $urlArray[0] : 'index';

            // 获取URL参数
            array_shift($urlArray);
            $param = $urlArray ? $urlArray : array();
        }

        // 实例化控制器
        $controller = $controllerName. 'Controller';
        $dispatch = new  $controller($controllerName, $action);

        // 如果控制器和方法存在，传入url及参数
        if ((int)method_exists($controller, $action)) {
            call_user_func_array(array($dispatch, $action), $param);
        } else {
            exit($controller. '控制器不存在');
        }

    }

    // 判断开发环境，输出不同信息
    public function setReporting() {
        if (APP_DEBUG === true) {
            error_reporting(E_ALL);
            ini_set('display_errors', 'On');
        } else {
            error_reporting(E_ALL);
            ini_set('display_errors', 'off');
            ini_set('log_errors', 'On');
            ini_set('error_log', RUNTIME_PATH.'logs/error.log');
        }
    }

    // 删除敏感字符
    public function stripSlashesDeep($value)
    {
        $value = is_array($value) ? array_map(array($this, 'stripSlashesDeep'), $value) : stripslashes($value);
        return $value;
    }

    public function removeMagicQuotes()
    {
        if (get_magic_quotes_gpc()) {
            $_GET = isset($_GET) ? $this->stripSlashesDeep($_GET ) : '';
            $_POST = isset($_POST) ? $this->stripSlashesDeep($_POST ) : '';
            $_COOKIE = isset($_COOKIE) ? $this->stripSlashesDeep($_COOKIE) : '';
            $_SESSION = isset($_SESSION) ? $this->stripSlashesDeep($_SESSION) : '';
        }
    }

    // 检测自定义全局变量（register globals）并移除
    public function unRegisterGlobals()
    {
        if (ini_get('register_globals')) {
            $array = array('_SESSION', '_POST', '_GET', '_COOKIE', '_REQUEST', '_SERVER', '_ENV', '_FILES');
            foreach ($array as $value) {
                foreach ($GLOBALS[$value] as $key => $var) {
                    if ($var === $GLOBALS[$key]) {
                        unset($GLOBALS[$key]);
                    }
                }
            }
        }
    }

}