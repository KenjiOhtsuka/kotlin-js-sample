if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin_js_sample'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin_js_sample'.");
}
var kotlin_js_sample = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var math = Kotlin.kotlin.math;
  var Unit = Kotlin.kotlin.Unit;
  var toString = Kotlin.toString;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var throwUPAE = Kotlin.throwUPAE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var createElement = Kotlin.kotlin.dom.createElement_7cgwi1$;
  var throwCCE = Kotlin.throwCCE;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  GameOverException.prototype = Object.create(Exception.prototype);
  GameOverException.prototype.constructor = GameOverException;
  StageClearException.prototype = Object.create(Exception.prototype);
  StageClearException.prototype.constructor = StageClearException;
  MissException.prototype = Object.create(Exception.prototype);
  MissException.prototype.constructor = MissException;
  function Ball(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }
  Ball.prototype.process_f69bme$ = function (context2D) {
    this.x += this.dx;
    this.y += this.dy;
  };
  Object.defineProperty(Ball.prototype, 'top', {
    get: function () {
      return this.y - this.radius;
    }
  });
  Object.defineProperty(Ball.prototype, 'bottom', {
    get: function () {
      return this.y + this.radius;
    }
  });
  Object.defineProperty(Ball.prototype, 'left', {
    get: function () {
      return this.x - this.radius;
    }
  });
  Object.defineProperty(Ball.prototype, 'right', {
    get: function () {
      return this.x + this.radius;
    }
  });
  Ball.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ball',
    interfaces: []
  };
  function Brick(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.left = this.x;
    this.right = this.x + this.width;
    this.top = this.y;
    this.bottom = this.y + this.height;
    this.valid = true;
  }
  Brick.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Brick',
    interfaces: []
  };
  Brick.prototype.component1 = function () {
    return this.x;
  };
  Brick.prototype.component2 = function () {
    return this.y;
  };
  Brick.prototype.component3 = function () {
    return this.width;
  };
  Brick.prototype.component4 = function () {
    return this.height;
  };
  Brick.prototype.copy_6y0v78$ = function (x, y, width, height) {
    return new Brick(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Brick.prototype.toString = function () {
    return 'Brick(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Brick.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Brick.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function Drawer() {
    Drawer_instance = this;
  }
  Drawer.prototype.draw_4grxgg$ = function (context2D, ball) {
    context2D.beginPath();
    context2D.arc(ball.x, ball.y, ball.radius, 0.0, 2 * math.PI);
    context2D.fillStyle = '#0095DD';
    context2D.fill();
    context2D.closePath();
  };
  Drawer.prototype.draw_ncbb3p$ = function (context2D, paddle) {
    context2D.beginPath();
    context2D.rect(paddle.x, context2D.canvas.height - paddle.height, paddle.width, paddle.height);
    context2D.fillStyle = '#0095DD';
    context2D.fill();
    context2D.closePath();
  };
  Drawer.prototype.draw_y796o$ = function (context2D, brickArray) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== brickArray.length; ++tmp$) {
      var element = brickArray[tmp$];
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== element.length; ++tmp$_0) {
        var element_0 = element[tmp$_0];
        if (element_0.valid) {
          context2D.beginPath();
          context2D.rect(element_0.x, element_0.y, element_0.width, element_0.height);
          context2D.fillStyle = '#0095DD';
          context2D.fill();
          context2D.closePath();
        }
      }
    }
  };
  Drawer.prototype.draw_3vk5ap$ = function (context2D, score) {
    context2D.font = '16px Arial';
    context2D.fillStyle = '#0095DD';
    context2D.fillText('Score: ' + toString(score.total), 8.0, 20.0);
  };
  Drawer.prototype.draw_n6b24e$ = function (context2D, player) {
    context2D.font = '16px Arial';
    context2D.fillStyle = '#0095DD';
    context2D.fillText('Lives: ' + toString(player.lifeCount), context2D.canvas.width - 65.0, 20.0);
  };
  Drawer.prototype.clearCanvas_f69bme$ = function (context2D) {
    context2D.clearRect(0.0, 0.0, context2D.canvas.width * 1.0, context2D.canvas.height * 1.0);
  };
  Drawer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Drawer',
    interfaces: []
  };
  var Drawer_instance = null;
  function Drawer_getInstance() {
    if (Drawer_instance === null) {
      new Drawer();
    }
    return Drawer_instance;
  }
  function GameOverException() {
    Exception_init(this);
    this.name = 'GameOverException';
  }
  GameOverException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameOverException',
    interfaces: [Exception]
  };
  function StageClearException() {
    Exception_init(this);
    this.name = 'StageClearException';
  }
  StageClearException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StageClearException',
    interfaces: [Exception]
  };
  function Game() {
    Game_instance = this;
    this.canvas_yqpvcn$_0 = lazy(Game$canvas$lambda);
    this.context2D_wqccxa$_0 = lazy(Game$context2D$lambda(this));
    this.ball_3xu2gy$_0 = this.ball_3xu2gy$_0;
    this.paddle_duehpz$_0 = this.paddle_duehpz$_0;
    this.stage_blbevf$_0 = this.stage_blbevf$_0;
    this.score = new Score();
    this.player = new Player(3);
  }
  Object.defineProperty(Game.prototype, 'canvas', {
    get: function () {
      return this.canvas_yqpvcn$_0.value;
    }
  });
  Object.defineProperty(Game.prototype, 'context2D', {
    get: function () {
      return this.context2D_wqccxa$_0.value;
    }
  });
  Object.defineProperty(Game.prototype, 'ball', {
    get: function () {
      if (this.ball_3xu2gy$_0 == null)
        return throwUPAE('ball');
      return this.ball_3xu2gy$_0;
    },
    set: function (ball) {
      this.ball_3xu2gy$_0 = ball;
    }
  });
  Object.defineProperty(Game.prototype, 'paddle', {
    get: function () {
      if (this.paddle_duehpz$_0 == null)
        return throwUPAE('paddle');
      return this.paddle_duehpz$_0;
    },
    set: function (paddle) {
      this.paddle_duehpz$_0 = paddle;
    }
  });
  Object.defineProperty(Game.prototype, 'stage', {
    get: function () {
      if (this.stage_blbevf$_0 == null)
        return throwUPAE('stage');
      return this.stage_blbevf$_0;
    },
    set: function (stage) {
      this.stage_blbevf$_0 = stage;
    }
  });
  function Game$setup$lambda($receiver) {
    $receiver.id = 'myCanvas';
    $receiver.setAttribute('width', '480');
    $receiver.setAttribute('height', '320');
    return Unit;
  }
  function Game$setup$lambda$lambda(closure$pressed) {
    return function (it) {
      Kotlin.isType(it, KeyboardEvent) || throwCCE();
      var closure$pressed_0 = closure$pressed;
      switch (it.keyCode) {
        case 39:
          Key_getInstance().right = closure$pressed_0;
          break;
        case 37:
          Key_getInstance().left = closure$pressed_0;
          break;
      }
      return Unit;
    };
  }
  function Game$setup$lambda_0(pressed) {
    return EventListener(Game$setup$lambda$lambda(pressed));
  }
  function Game$setup$lambda_1(this$Game) {
    return function (it) {
      var tmp$;
      Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : throwCCE();
      var relativeX = it.clientX - this$Game.canvas.offsetLeft | 0;
      if (0 < relativeX && relativeX < this$Game.canvas.width)
        this$Game.paddle.x = relativeX - this$Game.paddle.width / 2;
      return Unit;
    };
  }
  Game.prototype.setup = function () {
    ensureNotNull(document.body).appendChild(createElement(document, 'canvas', Game$setup$lambda));
    var keyPressEvent = Game$setup$lambda_0;
    document.addEventListener('keydown', keyPressEvent(true));
    document.addEventListener('keyup', keyPressEvent(false));
    document.addEventListener('mousemove', Game$setup$lambda_1(this), false);
    this.ball = new Ball(this.canvas.width / 2.0, this.canvas.height - 30.0, -2.0, -2.0, 10.0);
    this.paddle = new Paddle(10.0, 75.0, (this.context2D.canvas.height - 75.0) / 2);
    this.stage = new Stage(3, 5, 75, 20, 10, 30, 30);
    this.process_0();
  };
  function Game$process$lambda(this$Game) {
    return function (it) {
      this$Game.process_0();
      return Unit;
    };
  }
  Game.prototype.process_0 = function () {
    try {
      this.updateDirectionByPaddleAndWallCollision_0();
      this.updateDirectionAndScoreByBlockCollision_0();
    }
     catch (e) {
      if (Kotlin.isType(e, MissException)) {
        this.miss_0();
      }
       else if (Kotlin.isType(e, StageClearException)) {
        this.clear_0();
      }
       else
        throw e;
    }
    var $receiver = Drawer_getInstance();
    $receiver.clearCanvas_f69bme$(this.context2D);
    $receiver.draw_4grxgg$(this.context2D, this.ball);
    $receiver.draw_ncbb3p$(this.context2D, this.paddle);
    $receiver.draw_y796o$(this.context2D, this.stage.brickArray);
    $receiver.draw_3vk5ap$(this.context2D, this.score);
    $receiver.draw_n6b24e$(this.context2D, this.player);
    this.ball.process_f69bme$(this.context2D);
    this.paddle.process_2fo2hu$(this.context2D, Key_getInstance());
    window.requestAnimationFrame(Game$process$lambda(this));
  };
  Game.prototype.reset_0 = function () {
    var tmp$;
    (tmp$ = document.location) != null ? (tmp$.reload(), Unit) : null;
  };
  Game.prototype.updateDirectionAndScoreByBlockCollision_0 = function () {
    var $receiver = this.stage.brickArray;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== element.length; ++tmp$_0) {
        var element_0 = element[tmp$_0];
        if (element_0.valid && element_0.left < this.ball.x && this.ball.x < element_0.right && element_0.top < this.ball.y && this.ball.y < element_0.bottom) {
          this.ball.dy = this.ball.dy * -1;
          element_0.valid = false;
          this.score.plusAssign_za3lpa$(1);
        }
      }
    }
    if (this.stage.validBrickCount === 0) {
      throw new StageClearException();
    }
  };
  Game.prototype.updateDirectionByPaddleAndWallCollision_0 = function () {
    var $receiver = this.ball;
    if ($receiver.top + $receiver.dy < 0)
      $receiver.dy *= -1;
    else if (this.context2D.canvas.height < $receiver.bottom + $receiver.dy) {
      if (this.paddle.left < $receiver.x && $receiver.x < this.paddle.right)
        $receiver.dy *= -1;
      else
        throw new MissException();
    }
    if ($receiver.left + $receiver.dx < 0 || this.context2D.canvas.width < $receiver.right + $receiver.dx)
      $receiver.dx *= -1;
  };
  Game.prototype.miss_0 = function () {
    var tmp$;
    tmp$ = this.player;
    tmp$.lifeCount = tmp$.lifeCount - 1 | 0;
    if (this.player.lifeCount > 0) {
      this.resetBall_0();
      this.resetPaddle_0();
      return;
    }
    this.over_0();
  };
  Game.prototype.over_0 = function () {
    window.alert('Game Over');
    this.reset_0();
  };
  Game.prototype.clear_0 = function () {
    window.alert('Stage Clear');
    this.reset_0();
  };
  Game.prototype.resetPaddle_0 = function () {
    this.paddle.x = (this.canvas.width - this.paddle.width) / 2;
  };
  Game.prototype.resetBall_0 = function () {
    var $receiver = this.ball;
    $receiver.x = this.canvas.width / 2.0;
    $receiver.y = this.canvas.height - 30.0;
    $receiver.dx = 2.0;
    $receiver.dy = -2.0;
  };
  function Game$canvas$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('myCanvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
  }
  function Game$context2D$lambda(this$Game) {
    return function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this$Game.canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    };
  }
  Game.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Game',
    interfaces: []
  };
  var Game_instance = null;
  function Game_getInstance() {
    if (Game_instance === null) {
      new Game();
    }
    return Game_instance;
  }
  function Key() {
    Key_instance = this;
    this.right = false;
    this.left = false;
  }
  Key.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Key',
    interfaces: []
  };
  var Key_instance = null;
  function Key_getInstance() {
    if (Key_instance === null) {
      new Key();
    }
    return Key_instance;
  }
  function main(args) {
    Game_getInstance().setup();
  }
  function MissException() {
    Exception_init(this);
    this.name = 'MissException';
  }
  MissException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MissException',
    interfaces: [Exception]
  };
  function Paddle(height, width, x, v) {
    if (v === void 0)
      v = 7.0;
    this.height = height;
    this.width = width;
    this.x = x;
    this.v = v;
  }
  Paddle.prototype.process_2fo2hu$ = function (context2D, key) {
    if (Key_getInstance().right) {
      if (this.x < context2D.canvas.width - this.width)
        this.x += this.v;
    }
     else if (Key_getInstance().left)
      if (0 < this.x)
        this.x -= this.v;
  };
  Object.defineProperty(Paddle.prototype, 'left', {
    get: function () {
      return this.x;
    },
    set: function (value) {
      this.x = value;
    }
  });
  Object.defineProperty(Paddle.prototype, 'right', {
    get: function () {
      return this.x + this.width;
    },
    set: function (value) {
      this.x = value - this.width;
    }
  });
  Paddle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paddle',
    interfaces: []
  };
  function Player(lifeCount) {
    this.lifeCount = lifeCount;
  }
  Player.prototype.drop_za3lpa$ = function (value) {
    if (value === void 0)
      value = 0;
    this.lifeCount = this.lifeCount - value | 0;
  };
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: []
  };
  function ProcessInterface() {
  }
  ProcessInterface.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ProcessInterface',
    interfaces: []
  };
  function Score() {
    this.total = 0;
  }
  Score.prototype.plusAssign_za3lpa$ = function (value) {
    this.add_za3lpa$(value);
  };
  Score.prototype.unaryPlus = function () {
    this.add_za3lpa$(1);
  };
  Score.prototype.add_za3lpa$ = function (value) {
    this.total = this.total + value | 0;
  };
  Score.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Score',
    interfaces: []
  };
  var Array_0 = Array;
  function Stage(brickRowCount, brickColumnCount, brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft) {
    this.brickRowCount = brickRowCount;
    this.brickColumnCount = brickColumnCount;
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
    this.brickPadding = brickPadding;
    this.brickOffsetTop = brickOffsetTop;
    this.brickOffsetLeft = brickOffsetLeft;
    var array = Array_0(this.brickRowCount);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var array_0 = Array_0(this.brickColumnCount);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        array_0[i_0] = new Brick(Kotlin.imul(i_0, this.brickWidth + this.brickPadding | 0) + this.brickOffsetLeft | 0, Kotlin.imul(i, this.brickHeight + this.brickPadding | 0) + this.brickOffsetTop | 0, this.brickWidth, this.brickHeight);
      }
      array[i] = array_0;
    }
    this.brickArray = array;
  }
  Object.defineProperty(Stage.prototype, 'validBrickCount', {
    get: function () {
      var $receiver = this.brickArray;
      var tmp$;
      var sum = 0;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var tmp$_0 = sum;
        var tmp$_1;
        var sum_0 = 0;
        for (tmp$_1 = 0; tmp$_1 !== element.length; ++tmp$_1) {
          var element_0 = element[tmp$_1];
          sum_0 = sum_0 + (element_0.valid ? 1 : 0) | 0;
        }
        sum = tmp$_0 + sum_0 | 0;
      }
      return sum;
    }
  });
  Stage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stage',
    interfaces: []
  };
  Stage.prototype.component1 = function () {
    return this.brickRowCount;
  };
  Stage.prototype.component2 = function () {
    return this.brickColumnCount;
  };
  Stage.prototype.component3 = function () {
    return this.brickWidth;
  };
  Stage.prototype.component4 = function () {
    return this.brickHeight;
  };
  Stage.prototype.component5 = function () {
    return this.brickPadding;
  };
  Stage.prototype.component6 = function () {
    return this.brickOffsetTop;
  };
  Stage.prototype.component7 = function () {
    return this.brickOffsetLeft;
  };
  Stage.prototype.copy_ui44o2$ = function (brickRowCount, brickColumnCount, brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft) {
    return new Stage(brickRowCount === void 0 ? this.brickRowCount : brickRowCount, brickColumnCount === void 0 ? this.brickColumnCount : brickColumnCount, brickWidth === void 0 ? this.brickWidth : brickWidth, brickHeight === void 0 ? this.brickHeight : brickHeight, brickPadding === void 0 ? this.brickPadding : brickPadding, brickOffsetTop === void 0 ? this.brickOffsetTop : brickOffsetTop, brickOffsetLeft === void 0 ? this.brickOffsetLeft : brickOffsetLeft);
  };
  Stage.prototype.toString = function () {
    return 'Stage(brickRowCount=' + Kotlin.toString(this.brickRowCount) + (', brickColumnCount=' + Kotlin.toString(this.brickColumnCount)) + (', brickWidth=' + Kotlin.toString(this.brickWidth)) + (', brickHeight=' + Kotlin.toString(this.brickHeight)) + (', brickPadding=' + Kotlin.toString(this.brickPadding)) + (', brickOffsetTop=' + Kotlin.toString(this.brickOffsetTop)) + (', brickOffsetLeft=' + Kotlin.toString(this.brickOffsetLeft)) + ')';
  };
  Stage.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.brickRowCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.brickColumnCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.brickWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.brickHeight) | 0;
    result = result * 31 + Kotlin.hashCode(this.brickPadding) | 0;
    result = result * 31 + Kotlin.hashCode(this.brickOffsetTop) | 0;
    result = result * 31 + Kotlin.hashCode(this.brickOffsetLeft) | 0;
    return result;
  };
  Stage.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.brickRowCount, other.brickRowCount) && Kotlin.equals(this.brickColumnCount, other.brickColumnCount) && Kotlin.equals(this.brickWidth, other.brickWidth) && Kotlin.equals(this.brickHeight, other.brickHeight) && Kotlin.equals(this.brickPadding, other.brickPadding) && Kotlin.equals(this.brickOffsetTop, other.brickOffsetTop) && Kotlin.equals(this.brickOffsetLeft, other.brickOffsetLeft)))));
  };
  var package$kotlinSample = _.kotlinSample || (_.kotlinSample = {});
  package$kotlinSample.Ball = Ball;
  package$kotlinSample.Brick = Brick;
  Object.defineProperty(package$kotlinSample, 'Drawer', {
    get: Drawer_getInstance
  });
  package$kotlinSample.GameOverException = GameOverException;
  var package$Exception = package$kotlinSample.Exception || (package$kotlinSample.Exception = {});
  package$Exception.StageClearException = StageClearException;
  Object.defineProperty(package$kotlinSample, 'Game', {
    get: Game_getInstance
  });
  Object.defineProperty(package$kotlinSample, 'Key', {
    get: Key_getInstance
  });
  package$kotlinSample.main_vqirvp$ = main;
  package$kotlinSample.MissException = MissException;
  package$kotlinSample.Paddle = Paddle;
  package$kotlinSample.Player = Player;
  package$kotlinSample.ProcessInterface = ProcessInterface;
  package$kotlinSample.Score = Score;
  package$kotlinSample.Stage = Stage;
  main([]);
  Kotlin.defineModule('kotlin_js_sample', _);
  return _;
}(typeof kotlin_js_sample === 'undefined' ? {} : kotlin_js_sample, kotlin);
