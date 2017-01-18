/**
 * Created by yevhen.zavhorodnii on 20/12/2016.
 */

function Size(cfg) {
    if (cfg) {
        if (typeof(cfg.width)  === "number") {
            this.width = cfg.width;
        }
        else {
            throw new UserException("Config x is undefined");
        }

        if (typeof(cfg.height)  === "number") {
            this.height = cfg.height;
        }
        else {
            throw new UserException("Config y is undefined");
        }

    }
    else {
        throw new UserException("Config for Size is undefined");
    }

}