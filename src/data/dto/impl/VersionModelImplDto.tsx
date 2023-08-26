import VersionModelEntity from "../../../domain/entities/VersionModelEntity"

const fromJson = (versionmodel: any): VersionModelEntity => {
    return {
        id: versionmodel.id,
        name: versionmodel.version,
    }
}

const toJson = (versionmodel: VersionModelEntity): any => {
    return {
        id: versionmodel.id,
        versionmodel: versionmodel.name,
    }
}

export default {
    fromJson,
    toJson,
}