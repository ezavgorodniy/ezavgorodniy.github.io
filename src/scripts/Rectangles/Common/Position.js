/**
 * Created by yevhen.zavhorodnii on 20/12/2016.
 */

function Position(cfg) {
    if (cfg) {
        if (typeof(cfg.x)  === "number") {
            this.x = cfg.x;
        }
        else {
            throw new UserException("Config x is undefined");
        }

        if (typeof(cfg.y)  === "number") {
            this.y = cfg.y;
        }
        else {
            throw new UserException("Config y is undefined");
        }

    }
    else {
        throw new UserException("Config for Position is undefined");
    }

}